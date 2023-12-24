

using System.ComponentModel.DataAnnotations;

namespace Vet_Clinic_rest.Model
{
    public class Client
    {


        public int Id { get; set; }
        public string Name { get; set; }
        public string phoneNumber { get; set; }

        public string veterinaris { get; set; }
    }
}
