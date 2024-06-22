using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vet_Clinic_rest.Migrations
{
    /// <inheritdoc />
    public partial class user : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Clients_Veterinarians_VetId",
                table: "Clients");

            migrationBuilder.AlterColumn<int>(
                name: "VetId",
                table: "Clients",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Clients_Veterinarians_VetId",
                table: "Clients",
                column: "VetId",
                principalTable: "Veterinarians",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Clients_Veterinarians_VetId",
                table: "Clients");

            migrationBuilder.AlterColumn<int>(
                name: "VetId",
                table: "Clients",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_Clients_Veterinarians_VetId",
                table: "Clients",
                column: "VetId",
                principalTable: "Veterinarians",
                principalColumn: "id");
        }
    }
}
