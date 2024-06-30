using Vet_Clinic_rest.Model;
using Vet_Clinic_rest.Controllers;

namespace Vet_Clinic_rest.Controllers
{
    public static class ClientMapper
    {
        public static ClientDTO ToDTO(Client client)
        {
            return new ClientDTO
            {
                Id = client.Id,
                name = client.Name,
                phoneNumber = client.PhoneNumber,
                veterinarianId = client.VetId,
                Veterinarians = client.Vet != null ? new VetDTO { Id = client.Vet.id, Name = client.Vet.Name } : null
            };
        }
    }
}


