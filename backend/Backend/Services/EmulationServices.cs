namespace VehicleDashboardBackEnd.Services
{
    public class EmulationServices
    {
        public class EmulationService : BackgroundService
        {
            private readonly IServiceProvider _serviceProvider;

            public EmulationService(IServiceProvider serviceProvider)
            {
                _serviceProvider = serviceProvider;
            }


            protected override async Task ExecuteAsync(CancellationToken stoppingToken)
            {
                while (!stoppingToken.IsCancellationRequested)
                {
                    EmulateChanges();
                    await Task.Delay(1000, stoppingToken); // Update every second
                }
            }

            private void EmulateChanges()
            {
                using var scope = _serviceProvider.CreateScope();
                var _context = scope.ServiceProvider.GetRequiredService<VdDbContext>();
                var vehicleStatus = _context.VehicleStatus.FirstOrDefault();

                if (vehicleStatus == null)
                {
                    return;
                }

                // Battery low condition
                if (vehicleStatus.BatteryPercentage <= 25)
                {
                    vehicleStatus.BatteryLow = true;
                }
                else
                {
                    vehicleStatus.BatteryLow = false;
                }

                // If battery is empty and not charging
                if (vehicleStatus.BatteryPercentage == 0 && !vehicleStatus.IsCharging)
                {
                    vehicleStatus.PowerConsumption = 0;
                    vehicleStatus.BatteryLow = true;
                    vehicleStatus.MotorRpm = 0;
                    vehicleStatus.ParkingBrake = true;

                    if (vehicleStatus.BatteryTemperature > 20)
                    {
                        vehicleStatus.BatteryTemperature -= 1;
                    }
                }
                // Handle motor status
                if (vehicleStatus.MotorRpm > 0 && vehicleStatus.IsCharging)
                {
                    // Please unplug the charger before starting the engine
                    vehicleStatus.MotorRpm = 0;
                }
                if (vehicleStatus.MotorRpm > 0 && !vehicleStatus.IsCharging)
                {
                    // Motor running
                    vehicleStatus.ParkingBrake = false;
                    vehicleStatus.PowerConsumption = vehicleStatus.MotorRpm * 1.25;

                    // Decrease battery percentage based on RPM
                    double batteryDrain = vehicleStatus.MotorRpm / 800.0;
                    vehicleStatus.BatteryPercentage = Math.Max(vehicleStatus.BatteryPercentage - batteryDrain, 0);

                    // Adjust battery temperature
                    double optimalTemp = vehicleStatus.MotorRpm / 40 + 20;
                    if (vehicleStatus.BatteryTemperature < optimalTemp)
                    {
                        vehicleStatus.BatteryTemperature += 1;
                    }
                }
                else
                {
                    // Motor stopped
                    vehicleStatus.PowerConsumption = 0;
                    vehicleStatus.ParkingBrake = true;
                    if (!vehicleStatus.IsCharging && vehicleStatus.BatteryTemperature > 20)
                    {
                        vehicleStatus.BatteryTemperature -= 1;
                    }
                }

                // Handle charging logic
                if (vehicleStatus.IsCharging)
                {
                    vehicleStatus.MotorRpm = 0;
                    vehicleStatus.BatteryPercentage += 1; // Simulate charging
                    vehicleStatus.PowerConsumption = -1000; // Negative to indicate charging

                    if (vehicleStatus.BatteryPercentage >= 100)
                    {
                        vehicleStatus.IsCharging = false;
                    }

                    if (vehicleStatus.BatteryTemperature < 40)
                    {
                        vehicleStatus.BatteryTemperature += 1;
                    }
                }

                // Ensure battery percentage stays within valid bounds
                vehicleStatus.BatteryPercentage = Math.Clamp(vehicleStatus.BatteryPercentage, 0, 100);

                // Save changes to the database
                _context.SaveChanges();
            }

        }
    }
}
