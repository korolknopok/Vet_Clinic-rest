﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Vet_Clinic_rest.Context;
using Vet_Clinic_rest.Model;
using BCrypt.Net;

namespace Vet_Clinic_rest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public AuthController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] LoginDto loginDto)
        {
            try
            {
                var existingUser = await _context.User.FirstOrDefaultAsync(u => u.Login == loginDto.Login);
                if (existingUser != null)
                {
                    return Conflict("User with this login already exists.");
                }

                var newUser = new User
                {
                    Login = loginDto.Login,
                };

                _context.User.Add(newUser);
                await _context.SaveChangesAsync();

                return Ok(new { message = "User registered successfully" });
            }
            catch (Exception ex)
            {
                // Логирование ошибки
                return StatusCode(500, "Failed to register user: " + ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await _context.User.FirstOrDefaultAsync(u => u.Login == loginDto.Login);
            if (user == null)
            {
                return Unauthorized("Invalid login or password.");
            }
            // Логика успешного входа
            return Ok(new { message = "Login successful" });
        }
    }
}