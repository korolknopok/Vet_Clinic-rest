using System.ComponentModel.DataAnnotations.Schema;

namespace Vet_Clinic_rest.Model
{
    [Table("Veterinarians")]
    public class Vet
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string DateOfBirth { get; set; }
        public string PhoneNumber { get; set; }
        public string Education { get; set; }

    }
}
