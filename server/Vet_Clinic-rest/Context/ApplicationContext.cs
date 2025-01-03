﻿using Microsoft.EntityFrameworkCore;
using Vet_Clinic_rest.Model;

namespace Vet_Clinic_rest.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
           : base(options)
        {

        }

        public DbSet<Client> Clients { get; set; }

        public DbSet<Vet> Veterinarians { get; set; }
        
        public DbSet<User> User { get; set; }
        
        public DbSet<Review> Reviews { get; set; }
    }
}
