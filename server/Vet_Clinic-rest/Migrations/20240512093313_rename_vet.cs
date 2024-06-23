using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vet_Clinic_rest.Migrations
{
    /// <inheritdoc />
    public partial class rename_vet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "veterinariansId",
                table: "Clients",
                newName: "VetId");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_VetId",
                table: "Clients",
                column: "VetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Clients_Veterinarians_VetId",
                table: "Clients",
                column: "VetId",
                principalTable: "Veterinarians",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Clients_Veterinarians_VetId",
                table: "Clients");

            migrationBuilder.DropIndex(
                name: "IX_Clients_VetId",
                table: "Clients");

            migrationBuilder.RenameColumn(
                name: "VetId",
                table: "Clients",
                newName: "veterinariansId");
        }
    }
}
