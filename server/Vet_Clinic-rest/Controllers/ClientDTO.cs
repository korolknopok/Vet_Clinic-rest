namespace Vet_Clinic_rest.Controllers
{
    public class ClientDTO
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string phoneNumber { get; set; }
        public int? veterinarianId { get; set; }
        public VetDTO Veterinarians { get; set; }
    }
}