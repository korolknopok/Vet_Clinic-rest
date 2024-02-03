
using System.ComponentModel.DataAnnotations;

namespace Vet_Clinic_rest.Model
{
    public class Veterinarians
    {
        
        public int id { get; set; }
        public string name { get; set; }
        public string dateOfBirth { get; set; }
        public string phoneNumber { get; set; }
        public string education { get; set; }

    }
}
