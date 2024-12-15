using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VehicleDashboardBackEnd.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VehicleStatus",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ParkingBrake = table.Column<bool>(type: "INTEGER", nullable: false),
                    CheckEngine = table.Column<bool>(type: "INTEGER", nullable: false),
                    MotorStatus = table.Column<bool>(type: "INTEGER", nullable: false),
                    BatteryLow = table.Column<bool>(type: "INTEGER", nullable: false),
                    MotorRpm = table.Column<int>(type: "INTEGER", nullable: false),
                    BatteryPercentage = table.Column<double>(type: "REAL", nullable: false),
                    BatteryTemperature = table.Column<int>(type: "INTEGER", nullable: false),
                    GearRatio = table.Column<int>(type: "INTEGER", nullable: false),
                    IsCharging = table.Column<bool>(type: "INTEGER", nullable: false),
                    PowerConsumption = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleStatus", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VehicleStatus");
        }
    }
}
