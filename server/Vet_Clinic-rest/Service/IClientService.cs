using Vet_Clinic_rest.Controllers;
using Vet_Clinic_rest.Model;

namespace Vet_Clinic_rest.Service
{
    public interface IClientService
    {
        IEnumerable<Client> GetAllClients();
        Client GetClientById(int id);
        bool UpdateClientVeterinarian(int clientId, int vetId);
        bool CreateClient(Client client);
        bool DeleteClient(int id);
    }
}