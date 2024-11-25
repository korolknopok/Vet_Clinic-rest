using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vet_Clinic_rest.Context;
using Vet_Clinic_rest.Model;

namespace Vet_Clinic_rest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public ReviewController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviews()
        {
            return await _context.Reviews.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();
            return Ok(review);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Review>> DeleteReview(int id)
        {
            var review = await _context.Reviews.FindAsync(id);
            
            _context.Reviews.Remove(review);
            _context.SaveChanges();
            
            return Ok(new { Message = "Delete review" });
        }
    }
}