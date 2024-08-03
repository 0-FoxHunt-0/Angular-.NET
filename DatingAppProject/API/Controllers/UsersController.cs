﻿using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class UsersController(DataContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await context.Users.ToListAsync();

        return Ok(users);
    }

    [HttpGet("{id}")] // endpoint/api/users/1
    public async Task<ActionResult<AppUser>> GetUserById(int id)
    {
        var user = await context.Users.FindAsync(id);

        if (user == null) return NotFound();

        return Ok(user);
    }
}
