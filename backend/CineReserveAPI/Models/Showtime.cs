namespace CineReserveAPI.Models
{
    public class Showtime
    {
        public int ShowId { get; set; }
        public int MovieId { get; set; }
        public DateTime StartTime { get; set; }
        public string TheaterName { get; set; } = string.Empty;
    }
}
