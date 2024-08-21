using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class UsersController(DataContext context) : ControllerBase
    {        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsersAsync()
        {
            var users = await context.AppUsers.ToListAsync();

            return users;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUserAsync(int id)
        {
            var user = await context.AppUsers.FindAsync(id);

            if (user == null) return NotFound();

            return user;
        }
    }
}
