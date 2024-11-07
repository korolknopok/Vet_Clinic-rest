**VetClinic** - это удобная и интуитивно понятная платформа для упрощения записи на приём к ветеринарам.

## Описание проекта

VetClinic направлен на повышение доступности ветеринарных услуг и упрощение процесса планирования визитов к ветеринарам. Платформа обеспечивает простой и быстрый способ записи через интернет, уменьшает время ожидания и помогает владельцам домашних животных взаимодействовать с ветеринарами наиболее удобным образом.

## Установка и настройка

### 1. Клонирование репозитория

Клонируйте репозиторий с GitHub:
```
git clone https://github.com/korolknopok/Vet_Clinic-rest.git
```

### 2. Установка зависимостей для фронтенда

Перейдите в папку `web` и установите все необходимые зависимости:

```
cd web
npm install
```

## Восстановление базы данных

1. Скачайте файл бэкапа базы данных по [этой ссылке](https://drive.google.com/file/d/1IjG7rXrrzmKo3Tt-t5OyVMF5szKrP2Tn/view?usp=drive_link).
2. Подключитесь к вашей базе данных (например, с помощью **pgAdmin**).
3. Восстановите базу данных с помощью скачанного файла.
## Конфигурация базы данных

Для подключения к базе данных используется файл `appsettings.json` в папке `server`. 
### Пример конфигурации `appsettings.json`

```
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=5432;Database=vet_clinic;UserId=postgres;Password=12345"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

Пример контекста базы данных (`ApplicationContext.cs`)
```
using Microsoft.EntityFrameworkCore;
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
    }
}
```

Замените значения `Server`, `Port`, `Database`, `UserId`, `Password` на ваши собственные параметры базы данных.

## Запуск проекта

### 1. Запуск бэкенда (server)

Бэкенд написан на ASP.NET и запускается через удобную для вас IDE:

- Откройте проект в IDE.
- Убедитесь, что выбран профиль запуска `https`.
- Нажмите **Shift + F10** или нажмите кнопку запуска (зелёная стрелка в верхней панели).

**Swagger** для тестирования API будет доступен по следующему адресу:

```
https://localhost:7205/swagger/index.html
```

### 2. Запуск фронтенда (web)

Перейдите в папку `web` и выполните:

```
npm start
```

