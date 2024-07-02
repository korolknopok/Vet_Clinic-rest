using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vet_Clinic_rest.Migrations
{
    /// <inheritdoc />
    public partial class RenameClient_And_Vet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "phoneNumber",
                table: "Veterinarians",
                newName: "PhoneNumber");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Veterinarians",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "education",
                table: "Veterinarians",
                newName: "Education");

            migrationBuilder.RenameColumn(
                name: "dateOfBirth",
                table: "Veterinarians",
                newName: "DateOfBirth");

            migrationBuilder.RenameColumn(
                name: "phoneNumber",
                table: "Clients",
                newName: "PhoneNumber");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Clients",
                newName: "Name");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Veterinarians",
                newName: "phoneNumber");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Veterinarians",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Education",
                table: "Veterinarians",
                newName: "education");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Veterinarians",
                newName: "dateOfBirth");

            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Clients",
                newName: "phoneNumber");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Clients",
                newName: "name");
        }
    }
}
