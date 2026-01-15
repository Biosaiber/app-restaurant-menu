Angular Introduction – Learning Project

This repository contains a learning project created while studying the fundamentals of Angular.
Its purpose is to practice core Angular concepts, understand project structure, and build confidence working with modern Angular features such as standalone components and template control flow.

📚 What This Project Covers

This project is a hands-on recap of the Angular Introduction lesson and focuses on the following topics:

🧱 Project Structure

The src/ folder contains all source files of the Angular application

Angular follows a clear and consistent file naming convention:

*.component.ts

*.component.html

*.component.css

🧩 Components

Components are defined using the @Component decorator

Each component includes metadata such as:

selector

standalone

imports

template or templateUrl

styles or styleUrls

The project uses standalone components, without NgModules

🎨 Templates & Rendering

HTML templates combine standard HTML with Angular-specific syntax

Dynamic content is rendered directly in templates

Control Flow

Conditional and iterative rendering using modern Angular syntax:

@if

@for

@switch

🔁 Data Binding

Synchronization between component logic and the template

Supported binding types:

Interpolation: {{ value }}

Property binding: [property]="value"

🧠 Component Composition

Components are composed by importing one standalone component into another

Enables building reusable and nested UI structures

📦 Content Projection

Content projection is implemented using <ng-content>

Supported Types

Single-slot projection

Multi-slot projection using select attributes with CSS selectors

🖼️ Image Optimization

Uses Angular’s NgOptimizedImage directive

Improves performance by optimizing image loading

Images are bound dynamically using the ngSrc attribute

🎯 Goal of the Project

The goal of this repository is:

To serve as a learning reference for Angular basics

To demonstrate understanding of Angular core concepts

To act as a foundation for future, more advanced Angular projects

🚀 Tech Stack

Angular (modern, standalone components)

TypeScript

HTML & CSS

📝 Notes

This project is intentionally simple and educational. It prioritizes clarity and learning over visual complexity or production-level architecture.