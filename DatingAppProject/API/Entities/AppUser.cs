namespace API.Entities;

public class AppUser
{
    public int Id { get; set; }
    public required string UserName { get; set; }

    // Adding hashing and salting to the users table
    public required byte[] PasswordHash { get; set; }
    public required byte[] PasswordSalt { get; set; }
}
