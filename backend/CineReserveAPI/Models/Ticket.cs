namespace CineReserveAPI.Models
{
    public class Ticket
    {
        public int TicketId { get; set; }
        public int ShowId { get; set; }
        public string RowNumber { get; set; } = string.Empty;
        public int SeatNumber { get; set; }
        public string Status { get; set; } = "Available";
    }
}
