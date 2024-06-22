using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;

namespace Vet_Clinic_rest.Model
{
    public class User
    {
        [Key]
        public int id { get; set; }

        [Required]
        [StringLength(100)]
        public string login { get; set; }

        [Required]
        [StringLength(255)]
        public string password { get; set; }
        
    }
}