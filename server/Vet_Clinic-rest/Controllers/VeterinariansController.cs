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
    }
}
