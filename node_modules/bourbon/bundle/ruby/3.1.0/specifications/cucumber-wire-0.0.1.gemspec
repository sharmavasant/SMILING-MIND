# -*- encoding: utf-8 -*-
# stub: cucumber-wire 0.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "cucumber-wire".freeze
  s.version = "0.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Matt Wynne".freeze]
  s.date = "2015-12-23"
  s.description = "Wire protocol for Cucumber".freeze
  s.email = "cukes@googlegroups.com".freeze
  s.homepage = "http://cucumber.io".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3".freeze)
  s.rubygems_version = "3.4.4".freeze
  s.summary = "cucumber-wire-0.0.1".freeze

  s.installed_by_version = "3.4.4" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<cucumber>.freeze, ["~> 2.1.0"])
  s.add_development_dependency(%q<bundler>.freeze, [">= 1.3.5"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0.9.2"])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3"])
  s.add_development_dependency(%q<aruba>.freeze, ["~> 0"])
end
