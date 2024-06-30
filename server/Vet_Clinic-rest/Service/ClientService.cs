using Microsoft.EntityFrameworkCore;
using Vet_Clinic_rest.Context;
using Vet_Clinic_rest.Model;

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

        public IEnumerable<Client> GetAllClients()
        {
            return _clients.Include(client => client.Vet).ToList();
        }

        public Client GetClientById(int id)
        {
            return _clients.Include(c => c.Vet).FirstOrDefault(c => c.Id == id);
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
            if (_context.Clients.Any(e => e.Name == client.Name))
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