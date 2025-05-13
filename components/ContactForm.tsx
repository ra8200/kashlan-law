"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [practiceArea, setPracticeArea] = useState("criminal-law");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!description.trim()) {
      alert("Please provide a description of your legal matter.");
      return;
    }
    if (!email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Please provide a valid email address.");
      return;
    }
    if (!description.trim()) {
      alert("Please provide a description of your legal matter.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, practiceArea, description }),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setPracticeArea("criminal-law");
      setDescription("");
    } else {
      alert("Failed to send the message.");
    }
  };

  return (
    <Card className="bg-secondary/20">
      <CardHeader>
        <CardTitle className="text-black">How can we help you?</CardTitle>
        <CardDescription className="text-black">
          Fill out the form below and we will get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="practice-area">Practice Area</Label>
            <Select value={practiceArea} onValueChange={setPracticeArea}>
              <SelectTrigger id="practice-area">
                <SelectValue placeholder="Select practice area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="criminal-law">Criminal Law</SelectItem>
                <SelectItem value="personal-injury">Personal Injury</SelectItem>
                <SelectItem value="litigation">Litigation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your legal matter"
              className="min-h-[100px]"
            />
          </div>
          <div className="flex items-start space-x-2 text-xs text-gray-600">
            <input
              type="checkbox"
              id="sms-consent"
              defaultChecked
              className="mt-1"
              required
            />
            <label htmlFor="sms-consent">
              By opting into SMS from a web form or other medium, you are
              agreeing to receive SMS messages from Kashlan Law LLC. This
              includes SMS messages for appointment scheduling, appointment
              reminders, post-visit instructions, lab notifications, and billing
              notifications. Message frequency varies. Message and data rates
              may apply. See privacy policy at www.kash.law/legal. Message HELP
              for help. Reply STOP to any message to opt out.
            </label>
          </div>
          <Button type="submit" className="bg-secondary">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
