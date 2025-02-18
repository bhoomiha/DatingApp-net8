using API.Data;
using API.Extensions;
using API.Middleware;
using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddApplicationServices(builder.Configuration);

builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionMiddleware>();
app.UseCors("AllowAllOrigins");

app.UseAuthentication();
app.UseAuthorization();



app.MapControllers();

app.Run();
