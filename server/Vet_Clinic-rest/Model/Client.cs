

using System.ComponentModel.DataAnnotations;

namespace Vet_Clinic_rest.Model
{
    public class Client
    {
        [Key]

        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone_number { get; set; }
    }
}
