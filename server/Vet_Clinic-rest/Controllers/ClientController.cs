using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using Vet_Clinic_rest.Model;
using Vet_Clinic_rest.Context;
using Microsoft.AspNetCore.Cors;
using System.Linq;
using Microsoft.EntityFrameworkCore;


namespace Vet_Clinic_rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class ClientController : ControllerBase
    {
        private ApplicationContext _clients;

        public ClientController(ApplicationContext clients)
        {
            _clients = clients;
        }

        
        [HttpGet]
        public IActionResult Get()
        {
            
            var clients = _clients.Clients.Select(client => new ClientDTO
            {
                Id = client.Id,
                name = client.name,
                phoneNumber = client.phoneNumber,
                veterinarianId = client.veterinarianId,
                Veterinarian = client.Veterinarian
            });

            return Ok(clients);
        }
        
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var client = _clients.Clients
                .Include(c => c.Veterinarian)
                .FirstOrDefault(c => c.Id == id);

            if (client == null)
            {
                return NotFound();
            }

            var clientDto = ClientMapper.ToDTO(client);
            return Ok(clientDto);
        }
        
        [HttpPost("UpdateClient")]
        public IActionResult UpdateClient(int clientId, int vetId)
        {
            var result = _clientService.UpdateClientVeterinarian(clientId, vetId);
            if (result)
            {
                return Ok(client);
            }
            else
            {
                return Ok("Client is not assigned to a veterinarian");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Client model)
        {

            var userExist = _clients.Clients.Any(e => e.name == model.name);
            if (userExist == true)
            {
                return Ok(new { Message = "User Already Created" });

            }

            _clients.Add(model);
            _clients.SaveChanges();

            return Ok(new { Message = "User Created" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var client = await _clients.Clients.FindAsync(id);

            _clients.Clients.Remove(client);
            _clients.SaveChanges();

            return Ok(new { Message = "User Deleted" });
        }
    }
}
