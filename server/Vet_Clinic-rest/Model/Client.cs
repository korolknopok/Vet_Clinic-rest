using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Vet_Clinic_rest.Model;

namespace Vet_Clinic_rest.Model
{
    public class Client
    {
        internal readonly int? veterinarianId;

        public int Id { get; set; }
        public string name { get; set; }
        public string phoneNumber { get; set; }

        [ForeignKey("veterinariansId")]
        public int? veterinariansId { get; set; }
        
        public Veterinarians Veterinarian { get; set; }
    }
}
