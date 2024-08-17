using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    [MaxLength(50)]
    public string Username { get; set; } = string.Empty;

    [Required]
    [StringLength(32, MinimumLength = 4)]
    public string Password { get; set; } = string.Empty;
}
