using CineReserveAPI.Data;
using CineReserveAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CineReserveAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingController(AppDbContext context) => _context = context;

        [HttpGet("seats/{showId}")]
        public async Task<IActionResult> GetSeats(int showId)
        {
            var seats = await _context.Tickets.Where(t => t.ShowId == showId).ToListAsync();
            return Ok(seats);
        }

        [HttpPost("book")]
        public async Task<IActionResult> BookSeat([FromBody] Ticket request)
        {
            var seat = await _context.Tickets.FirstOrDefaultAsync(t => t.TicketId == request.TicketId);
            if (seat == null) return NotFound("Seat not found");
            if (seat.Status == "Sold") return BadRequest("Already sold");

            seat.Status = "Sold";
            await _context.SaveChangesAsync();
            return Ok(new { message = "Booking Successful!" });
        }
    }
}