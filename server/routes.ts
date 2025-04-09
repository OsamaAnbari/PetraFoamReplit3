import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // In a real application, you'd store this in a database and/or send an email
      // For now, we'll just return success
      res.status(200).json({
        success: true,
        message: "Your message has been sent. We'll get back to you soon!"
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unexpected error occurred. Please try again later."
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
