using System.ComponentModel.DataAnnotations.Schema;

namespace Vet_Clinic_rest.Model
{
    [Table("Veterinarians")]
    public class Vet
    {
        public int id { get; set; }
        public string name { get; set; }
        public string dateOfBirth { get; set; }
        public string phoneNumber { get; set; }
        public string education { get; set; }

    }
}
