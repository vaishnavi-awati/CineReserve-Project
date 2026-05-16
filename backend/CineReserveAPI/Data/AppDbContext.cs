using Microsoft.EntityFrameworkCore;
using CineReserveAPI.Models;

namespace CineReserveAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // These properties map C# classes to SQL tables
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
    }
}
