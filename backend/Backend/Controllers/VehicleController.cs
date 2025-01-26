using Microsoft.AspNetCore.Mvc;
using VehicleDashboardBackEnd.Models;

namespace VehicleDashboardBackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehicleController : ControllerBase
    {
        private readonly VdDbContext _context;
        public VehicleController(VdDbContext context)
        {
            _context = context;
        }

        [HttpGet("status")]
        public ActionResult<VehicleStatus> GetVehicleStatus()
        {
            var vehicleStatus = _context.VehicleStatus.FirstOrDefault();
            // Hardcoded vehicle status data
            return Ok(vehicleStatus);
        }
        [HttpPut]
        [Route("status")]
        public IActionResult UpdateVehicleStatus([FromBody] VehicleStatus updatedStatus)
        {
            if (updatedStatus == null)
            {
                return BadRequest("No data provided.");
            }

            var existingStatus = _context.VehicleStatus.FirstOrDefault();
            if (existingStatus == null)
            {
                return NotFound("Vehicle status not found.");
            }

            // Log received data for debugging
            Console.WriteLine($"Received MotorRpm: {updatedStatus.MotorRpm}, IsCharging: {updatedStatus.IsCharging}");

            // Update fields
            existingStatus.MotorRpm = updatedStatus.MotorRpm;
            existingStatus.IsCharging = updatedStatus.IsCharging;
            existingStatus.PowerConsumption = updatedStatus.PowerConsumption;
            existingStatus.BatteryPercentage = updatedStatus.BatteryPercentage;


            _context.SaveChanges();
            return Ok(existingStatus);
        }

    }
}
