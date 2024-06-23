using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using Vet_Clinic_rest.Model;
using Vet_Clinic_rest.Context;
using Microsoft.AspNetCore.Cors;

namespace Vet_Clinic_rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeterinariansController : ControllerBase
    {
        private ApplicationContext _veterinarians;

        public VeterinariansController(ApplicationContext veterinarians)
        {
            _veterinarians = veterinarians;
        }

        [HttpGet]
        public List<Vet> Get()
        {
            var veterinarians = _veterinarians.Veterinarians;
            return veterinarians.ToList();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Vet model)
        {

            var veterinarianExist = _veterinarians.Veterinarians.Any(e => e.name == model.name);
            if (veterinarianExist == true)
            {
                return Ok(new { Message = "Veterinarian Already Created" });

            }

            _veterinarians.Add(model);
            _veterinarians.SaveChanges();

            return Ok(new { Message = "Veterinarian Created" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var veterinarians = await _veterinarians.Veterinarians.FindAsync(id);

            _veterinarians.Veterinarians.Remove(veterinarians);
            _veterinarians.SaveChanges();

            return Ok(new { Message = "Veterinarian Deleted" });
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Vet model)
        {
            var veterinarian = _veterinarians.Veterinarians.FirstOrDefault(e => e.id == id);
            if (veterinarian == null)
            {
                return NotFound();
            }
            veterinarian.name = model.name;
            veterinarian.phoneNumber = model.phoneNumber;
            veterinarian.dateOfBirth = model.dateOfBirth;
            veterinarian.education = model.education;

            _veterinarians.SaveChanges();

            return Ok(new { Message = "Veterinarian Update" });
        }
    }
}
