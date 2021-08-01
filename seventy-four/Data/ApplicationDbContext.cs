using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Models;

namespace RookieOnlineAssetManagement.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Category>().HasData(
               new Category { Id = 3, CategoryName = "Foreign", CategoryDescription = "Foreign language books are original books produced in foreign countries" },
               new Category { Id = 4, CategoryName = "Cookbooks", CategoryDescription = "a book containing recipes and other information about the preparation and cooking of food." },
               new Category { Id = 5, CategoryName = "Comics", CategoryDescription = "causing or meant to cause laughter." });

            modelBuilder.Entity<Size>().HasData(
                new Size { Id = 1, SizeName = "S"},
                new Size { Id = 2, SizeName = "M" },
                new Size { Id = 3, SizeName = "L" },
                new Size { Id = 4, SizeName = "XL" },
                new Size { Id = 5, SizeName = "XXL" });
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Order> Order { get; set; }

        public DbSet<OrderDetails> OrderDetails { get; set; }

        public DbSet<ProductImages> ProductImages { get; set; }

        public DbSet<Size> Sizes { get; set; }

        public DbSet<ProductSize> ProductSizes { get; set; }
    }
}
