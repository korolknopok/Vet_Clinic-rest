using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vet_Clinic_rest.Migrations
{
    /// <inheritdoc />
    public partial class RenameUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "password",
                table: "User",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "login",
                table: "User",
                newName: "Login");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "User",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Password",
                table: "User",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "Login",
                table: "User",
                newName: "login");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "User",
                newName: "id");
        }
    }
}
