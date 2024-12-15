using Microsoft.EntityFrameworkCore;
using VehicleDashboardBackEnd;
using VehicleDashboardBackEnd.Models;
using static VehicleDashboardBackEnd.Services.EmulationServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register DbContext with connection string from appsettings.json
builder.Services.AddDbContext<VdDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddHostedService<EmulationService>();

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin() // Allow requests from any origin
              .AllowAnyMethod() // Allow all HTTP methods (GET, POST, etc.)
              .AllowAnyHeader(); // Allow all headers
    });
});

var app = builder.Build();

// Automatically create or update the database schema
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<VdDbContext>();
    dbContext.Database.EnsureCreated(); // Creates the SQLite database if it doesn't exist

    if (!dbContext.VehicleStatus.Any())
    {
        dbContext.VehicleStatus.Add(new VehicleStatus { ParkingBrake = true, CheckEngine = false, MotorStatus = false, BatteryLow = false, MotorRpm = 0, BatteryPercentage = 100, IsCharging = false, PowerConsumption = 0, BatteryTemperature = 20, GearRatio = 7 });
        dbContext.SaveChanges();
    }
}


// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

// Enable CORS middleware
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
