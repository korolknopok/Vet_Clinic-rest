using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vet_Clinic_rest.Model
{
    public class Review
    {
        [Key]
        public int Id { get; set; }
    
        [Required]
        [StringLength(255)]
        public string Author { get; set; }
    
        [Required]
        public string Content { get; set; }
    
        [Range(1,5)]
        public int Rating { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;
    }
}

