﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using Vet_Clinic_rest.Model;
using Vet_Clinic_rest.Context;
using Microsoft.AspNetCore.Cors;

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


        /*private static readonly  List<Client> Clients = new(); */
        [HttpGet]

        public IActionResult Get()
        {
            // Создаем экземпляр класса DTO
            var clientDTO = new ClientDTO
            {
                veterinarians = new Veterinarians { /* Заполняем поля Veterinarians */ },
                VeterinariansId = 123
            };

            // Возвращаем результат выполнения метода
            return Ok(clientDTO);
        }

       /* public Client GetById(int id)
        {
            var clients = _clients.Clients.Find(id);
            if (clients == null) { throw new KeyNotFoundException("User Not Found"); }
            return clients;
        }*/

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var emp = _clients.Clients.Find(id);
            return Ok(emp);
        }

        
            
        [HttpPost]
        public IActionResult Post([FromBody] Client model)
        {

            var userExist = _clients.Clients.Any(e => e.Name == model.Name);
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
