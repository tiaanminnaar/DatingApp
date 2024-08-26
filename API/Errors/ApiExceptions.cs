﻿namespace API.Errors
{
    public class ApiExceptions(int statuscode, string message, string? details)
    {
        public int Statuscode { get; set; } = statuscode;
        public string Message { get; set; } = message;
        public string? Details { get; set; } = details;
    }
}
