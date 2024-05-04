using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Vet_Clinic_rest.Model;
using Vet_Clinic_rest.Service;

namespace Vet_Clinic_rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService ?? throw new ArgumentNullException(nameof(clientService));
        }

        [HttpGet]
        public IActionResult Get()
        {
            var clients = _clientService.GetAllClients();
            return Ok(clients);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var client = _clientService.GetClientById(id);
            if (client == null)
            {
                return NotFound();
            }

            return Ok(client);
        }

        [HttpPost("UpdateClient")]
        public IActionResult UpdateClient(int clientId, int vetId)
        {
            var result = _clientService.UpdateClientVeterinarian(clientId, vetId);
            if (result)
            {
                return Ok(new { Message = "Client updated successfully" });
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Client model)
        {
            var result = _clientService.CreateClient(model);
            if (result)
            {
                return Ok(new { Message = "User Created" });
            }
            else
            {
                return Conflict(new { Message = "User Already Created" });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result = _clientService.DeleteClient(id);
            if (result)
            {
                return Ok(new { Message = "User Deleted" });
            }
            else
            {
                return NotFound();
            }
        }
    }
}
