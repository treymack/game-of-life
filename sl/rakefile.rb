require 'albacore'

desc 'build'
msbuild :build do |msb|
  msb.properties = { :configuration => :Debug, :platform => 'Any CPU' }
  msb.targets = [ :Rebuild ]
  msb.solution = "GameOfLife.sln"
  msb.verbosity = 'quiet'
end

desc 'run specs'
task :specs => :build do
  result = system("packages/Machine.Specifications.0.5.7/tools/mspec-x86-clr4.exe src/GameOfLife.Specs/bin/Debug/GameOfLife.Specs.dll")
end

