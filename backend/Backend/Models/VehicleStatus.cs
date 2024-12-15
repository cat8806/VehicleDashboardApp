namespace VehicleDashboardBackEnd.Models
{
    public class VehicleStatus
    {
        public int Id { get; set; }
        public bool ParkingBrake { get; set; }
        public bool CheckEngine { get; set; }
        public bool MotorStatus { get; set; }
        public bool BatteryLow { get; set; }
        public int MotorRpm { get; set; }
        public double BatteryPercentage { get; set; }
        public int BatteryTemperature { get; set; }
        public int GearRatio { get; set; }
        public bool IsCharging { get; set; }
        public double PowerConsumption { get; set; }
    }
}
