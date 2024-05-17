using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Vet_Clinic_rest.Context;
using Vet_Clinic_rest.Model;
using Vet_Clinic_rest.Controllers;

namespace Vet_Clinic_rest.Service
{
    public class ClientService : IClientService
    {
        private readonly ApplicationContext _context;
        private readonly DbSet<Client> _clients;

        public ClientService(ApplicationContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _clients = context.Clients;
        }

        public IEnumerable<ClientDTO> GetAllClients()
        {
            return _clients
                .Include(client => client.Vet) // Предварительная загрузка ветеринаров
                .Select(client => new ClientDTO
                {
                    Id = client.Id,
                    name = client.name,
                    phoneNumber = client.phoneNumber,
                    veterinarianId = client.VetId,
                    Veterinarians = client.Vet // Просто передаем объект Vet
                });
        }

        public ClientDTO GetClientById(int id)
        {
            var client = _clients
                .Include(c => c.Vet) // Предварительная загрузка ветеринара
                .FirstOrDefault(c => c.Id == id);

            if (client == null)
            {
                return null;
            }

            return new ClientDTO
            {
                Id = client.Id,
                name = client.name,
                phoneNumber = client.phoneNumber,
                veterinarianId = client.VetId,
                Veterinarians = client.Vet // Просто передаем объект Vet
            };
        }

        
        public bool UpdateClientVeterinarian(int clientId, int vetId)
        {
            var client = _context.Clients.FirstOrDefault(c => c.Id == clientId);
            if (client == null)
            {
                return false;
            }

            client.VetId = vetId;
            _context.SaveChanges();

            return true;
        }

        public bool CreateClient(Client client)
        {
            if (_context.Clients.Any(e => e.name == client.name))
            {
                return false;
            }

            _context.Clients.Add(client);
            _context.SaveChanges();

            return true;
        }

        public bool DeleteClient(int id)
        {
            var client = _context.Clients.Find(id);
            if (client == null)
            {
                return false;
            }

            _context.Clients.Remove(client);
            _context.SaveChanges();

            return true;
        }
    }
}
