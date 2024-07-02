using Microsoft.EntityFrameworkCore;
using Vet_Clinic_rest.Context;
using Vet_Clinic_rest.Service;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", builder =>
    {
        builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add scoped services
builder.Services.AddScoped<ClientService, ClientService>();
builder.Services.AddScoped<IClientService, ClientService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();