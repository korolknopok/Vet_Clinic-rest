using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Vet_Clinic_rest.Context;
using Vet_Clinic_rest.Model;

namespace Vet_Clinic_rest.Service
{
    public class ClientService : IClientService
    {
        private readonly ApplicationContext _context;

        public ClientService(ApplicationContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public IEnumerable<ClientDTO> GetAllClients()
        {
            return _context.Clients
                .Include(client => client.Veterinarian)
                .Select(client => new ClientDTO
                {
                    Id = client.Id,
                    name = client.name,
                    phoneNumber = client.phoneNumber,
                    veterinarianId = client.veterinarianId,
                    Veterinarian = client.Veterinarian
                });
        }


        public ClientDTO GetClientById(int id)
        {
            var client = _context.Clients
                .Include(c => c.Veterinarian) // Загрузка ветеринара клиента
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
                veterinarianId = client.veterinarianId,
                Veterinarian = client.Veterinarian
            };
        }

        public bool UpdateClientVeterinarian(int clientId, int vetId)
        {
            var client = _context.Clients.FirstOrDefault(c => c.Id == clientId);
            if (client == null)
            {
                return false;
            }

            client.veterinariansId = vetId;
            _context.SaveChanges();

            return true;
        }

        public bool CreateClient(Client model)
        {
            if (_context.Clients.Any(e => e.name == model.name))
            {
                return false;
            }

            _context.Clients.Add(model);
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
