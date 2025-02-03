"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EventCalendar() {
  const [events, setEvents] = useState([
    { title: "Meeting", date: "2025-02-05" },
    { title: "Conference", date: "2025-02-10" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", date: "" });
  const [open, setOpen] = useState(false);

  // Handle adding event
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "" });
      setOpen(false);
    }
  };

  // Open dialog when clicking a date
  const handleDateClick = (info: any) => {
    setNewEvent({ title: "", date: info.dateStr });
    setOpen(true);
  };

  return (
    <Card className="p-6 shadow-lg border rounded-xl bg-white dark:bg-gray-900 dark:border-gray-800 transition-all">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          📅 Event Calendar
        </h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="dark:text-white">
              + Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="dark:bg-gray-800 dark:text-white">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Add New Event
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <Label className="dark:text-gray-300">Event Title</Label>
              <Input
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Label className="dark:text-gray-300">Event Date</Label>
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button
                onClick={handleAddEvent}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500"
              >
                Add Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Full Calendar */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick} // Clicking a date opens the event form
        eventClick={(info) => alert(`Event: ${info.event.title}`)}
        height="650px"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dayMaxEvents={true}
        eventDisplay="block"
      />
    </Card>
  );
}
