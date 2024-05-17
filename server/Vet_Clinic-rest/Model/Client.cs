using System.ComponentModel.DataAnnotations.Schema;

namespace Vet_Clinic_rest.Model
{
    public class Client
    {

        public int Id { get; set; }
        public string name { get; set; }
        public string phoneNumber { get; set; }

        [ForeignKey("VetId")]
        public int VetId { get; set; }

        public Vet Vet { get; set; }
    }
}