using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;

namespace Vet_Clinic_rest.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Login { get; set; }

        [Required]
        [StringLength(255)]
        public string Password { get; set; }
        
    }
}