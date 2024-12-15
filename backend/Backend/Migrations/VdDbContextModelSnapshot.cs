﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VehicleDashboardBackEnd;

#nullable disable

namespace VehicleDashboardBackEnd.Migrations
{
    [DbContext(typeof(VdDbContext))]
    partial class VdDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.0");

            modelBuilder.Entity("VehicleDashboardBackEnd.Models.VehicleStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("BatteryLow")
                        .HasColumnType("INTEGER");

                    b.Property<double>("BatteryPercentage")
                        .HasColumnType("REAL");

                    b.Property<int>("BatteryTemperature")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("CheckEngine")
                        .HasColumnType("INTEGER");

                    b.Property<int>("GearRatio")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsCharging")
                        .HasColumnType("INTEGER");

                    b.Property<int>("MotorRpm")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("MotorStatus")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("ParkingBrake")
                        .HasColumnType("INTEGER");

                    b.Property<double>("PowerConsumption")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("VehicleStatus");
                });
#pragma warning restore 612, 618
        }
    }
}
