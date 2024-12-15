using Microsoft.EntityFrameworkCore;
using VehicleDashboardBackEnd.Models;

namespace VehicleDashboardBackEnd
{
    public class VdDbContext : DbContext
    {
        public VdDbContext(DbContextOptions<VdDbContext> options) : base(options)
        {
        }

        // Define your DbSets (tables) here
        public DbSet<VehicleStatus> VehicleStatus { get; set; } // Example entity
    }


}
