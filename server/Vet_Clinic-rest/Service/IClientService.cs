using Vet_Clinic_rest.Model;

namespace Vet_Clinic_rest.Service
{
    public interface IClientService
    {
        IEnumerable<ClientDTO> GetAllClients();
        ClientDTO GetClientById(int id);
        bool UpdateClientVeterinarian(int clientId, int vetId);
        bool CreateClient(Client model);
        bool DeleteClient(int id);
    }
    
    
}